import bcrypt from "bcryptjs";
import generateTokens from "../utils/generateTokens";
import getToken from "../utils/getToken";
import sendMail from "../utils/sendMail";
const uuidv4 = require("uuid/v4");
import { createWriteStream,createReadStream } from 'fs';
import * as mkdirp from 'mkdirp';
import * as shortid from 'shortid';
import getBase64 from "../utils/getBase64"
import verifyFormat from "../utils/verifyFormat";

const uploadDir = __dirname+'/uploads';
mkdirp.sync(uploadDir)


// Formats for various checks
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var urlformat = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm

const storeUpload = async ({ stream, filename }) => {

  const id = shortid.generate()
  const path = `${uploadDir}/${id}-${filename}`

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on('finish', () => resolve({ id, path }))
      .on('error', reject),
  )
}


const processUpload = async upload => {

  const {  stream,filename, mimetype, encoding } = await upload
  
  // const stream = createReadStream()
  const { id, path } = await storeUpload({ stream, filename })
 
  return { id, filename, mimetype, encoding, path }
}





const Mutation = {
  async createUser(parent, args, { prisma}, info) {
    
    if (
      !verifyFormat(mailformat,args.data.email) ||
      !verifyFormat(mailformat,args.data.college_email)
    )
      throw new Error("Invalid email");
    var passformat = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    // if(!args.data.password.match(passformat)) throw new Error("Invalid password");

    if(!args.data.college_email.endsWith("@iiitl.ac.in")) throw new Error("Invalid email");
    if((args.data.fb_link&& !verifyFormat(urlformat,args.data.fb_link))||(args.data.linkedIn_link&& !verifyFormat(urlformat,args.data.linkedIn_link))||(args.data.twitter_link&& !verifyFormat(urlformat,args.data.twitter_link))||(args.data.github_link&& !verifyFormat(urlformat,args.data.github_link))) throw new Error("Invalid URL");


      

    const password = await bcrypt.hash(args.data.password, 10);
    const year = parseInt(args.data.college_email.substring(3,7),10);

    async function create(profile_pic){
      const user = await prisma.mutation.createUser({
        data: {
          ...args.data,
          profile_pic,
          year,
          password
        }
      });
      return user
    }
    
  let profile_pic

    if(args.data.profile_pic){
      return args.data.profile_pic.then(async pro=> {
        const res = await processUpload(pro);

        profile_pic=res.path
        const user = create(profile_pic)
        return user.then(retUser=>{
          const base64 =  getBase64(retUser.profile_pic);

        retUser.profile_pic = base64
        
        return { user:retUser, token: generateTokens(retUser.id), typeUser: "ALUMNI" };
        })
        
      })
    }
    else{
      const user = create(null)
      return user.then(retUser=>{
      
      return { user:retUser, token: generateTokens(retUser.id), typeUser: "ALUMNI" };
    })}
 
    
  },

  async loginUser(parent, args, { prisma }, info) {
    const user = await prisma.query.user({
      where: {
        email: args.data.email
      }
    });
    if(!user) throw new Error("Unable to login")

    const isMatch = await bcrypt.compare(args.data.password, user.password);

    if (!isMatch) throw new Error("Unable to login");

    let token;
    if (user.role === "ALUMNI") token = generateTokens(user.id);
    else token = generateTokens(user.id, "ADMIN");

    let res=null
    if(user.profile_pic){
      res = getBase64(user.profile_pic)
    user.profile_pic = res;

    }


    return { user, token, typeUser: user.role };
  },

  async updateUser(parent, args, { prisma, request }, info) {
    const token = getToken(request);
    if (token === null) throw new Error("Authentication required");
    if (
      !verifyFormat(mailformat,args.data.email)
    )
      throw new Error("Invalid email");
      if((args.data.fb_link&& !verifyFormat(urlformat,args.data.fb_link))||(args.data.linkedIn_link&& !verifyFormat(urlformat,args.data.linkedIn_link))||(args.data.twitter_link&& !verifyFormat(urlformat,args.data.twitter_link))||(args.data.github_link&& !verifyFormat(urlformat,args.data.github_link))) throw new Error("Invalid URL");

     
    let userId = token.userId;
    if (token.role === "ADMIN" && args.id) userId = args.id;
    if(args.data.profile_pic) {
      profile_pic = await processUpload(args.data.profile_pic)
      args.data.profile_pic=profile_pic
    }

    const user = await prisma.mutation.updateUser({
      data: {
        ...args.data,
      },
      where: {
        id: userId
      }
    },
    info);
    return user;
  },

  async createAdmin(parent, args, { prisma, request }, info) {
    const users = await prisma.query.users({
      where: {
        role: "ADMIN"
      }
    });

    const token = getToken(request);
    if (token === null && users.length > 0) {
      throw new Error("Cannot create admin.");
    }

    if (token && token.role === "ALUMNI")
      throw new Error("Cannot create admin.");

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (args.data.email !== args.data.college_email)
      throw new Error("Incorrect  data");
    if (
      !args.data.email.match(mailformat) ||
      !args.data.college_email.match(mailformat)
    )
      throw new Error("Invalid email");
    var passformat = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    // if(!args.data.password.match(passformat)) throw new Error("Invalid password");
    const password = await bcrypt.hash(args.data.password, 10);
    const user = await prisma.mutation.createUser({
      data: {
        ...args.data,
        password,
        role: "ADMIN"
      }
    });
    return { user, token: generateTokens(user.id, "ADMIN") };
  },
  async createPost(parent, args, { prisma, request }, info) {
    const token = getToken(request);
    if (!token || token.role !== "ADMIN")
      throw new Error("Unauthorized action");
    const post = await prisma.mutation.createPost({
      data: {
        ...args.data
      }
    });
    return post;
  },
  async updatePost(parent, args, { prisma, request }, info) {
    const token = getToken(request);
    if (!token || token.role !== "ADMIN")
      throw new Error("Unauthorized action");
    let post = await prisma.exists.Post({ id: args.id });
    if (!post) throw new Error("Unable to update post");
    post = await prisma.mutation.updatePost({
      data: {
        ...args.data
      },
      where: {
        id: args.id
      }
    });
    return post;
  },
  async deletePost(parent, args, { prisma, request }, info) {
    const token = getToken(request);

    if (!token || token.role !== "ADMIN")
      throw new Error("Unauthorized action");
    let post = await prisma.exists.Post({ id: args.id });
    if (!post) throw new Error("Unable to delete post");

    post = await prisma.mutation.deletePost({
      where: {
        id: args.id
      }
    });
    return post;
  },
  async forgotPassword(root, args, { prisma }, info) {
    const isUser = await prisma.query.user({
      where: {
        email: args.email
      }
    });
    if (!isUser) throw new Error("Unable to reset password");
    const token = uuidv4();
    const resetPasswordToken = token;
    const resetPasswordExpires = Date.now() + 3600000;
    const user = await prisma.mutation.updateUser({
      data: {
        resetPasswordToken,
        resetPasswordExpires
      },
      where: {
        email: args.email
      }
    });
    sendMail(user.email, token);
    return "Email sent successfully";
  },
  async changePassword(root, args, { prisma }, info) {
    let user = await prisma.query.user({
      where: { resetPasswordToken: args.data.token }
    });
    if (!user || user.resetPasswordExpires < Date.now())
      throw new Error("Unable to reset password");

    const password = await bcrypt.hash(args.data.password, 10);
    const resetPasswordToken = null;
    const resetPasswordExpires = null;
    user = await prisma.mutation.updateUser({
      data: {
        password,
        resetPasswordToken,
        resetPasswordExpires
      },
      where: {
        id: user.id
      }
    });

    return user;
  },

  async createEvent(root, args, { prisma,request }, info){
    const token = getToken(request);
    if (!token || token.role !== "ADMIN")
      throw new Error("Unauthorized action");
    const event = await prisma.mutation.createEvent({
      data: {
        ...args.data
      }
    });
    return event;
  },
  async updateEvent(root,args,{prisma,request},info){
    const token = getToken(request);
    if (!token || token.role !== "ADMIN")
      throw new Error("Unauthorized action");
    let event = await prisma.exists.Event({ id: args.id });
    if (!event) throw new Error("Unable to update event");
    event = await prisma.mutation.updateEvent({
      data: {
        ...args.data
      },
      where: {
        id: args.id
      }
    });
    return event;
  },
  async deleteEvent(parent, args, { prisma, request }, info) {
    const token = getToken(request);
    if (!token || token.role !== "ADMIN")
      throw new Error("Unauthorized action");
    let event = await prisma.exists.Event({ id: args.id });
    if (!event) throw new Error("Unable to delete event");
    event = await this.deleteEvent({
      where: {
        id: args.id
      }
    });
    return event;
  }
};

export { Mutation as default };
