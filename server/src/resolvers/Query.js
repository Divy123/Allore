import getToken from "../utils/getToken";
import getBase64 from "../utils/getBase64"

const Query = {
  async users(parent, args, { prisma, request }, info) {
    const token = getToken(request);
    if (!token) throw new Error("Authentication required");
    if (token.role === "ALUMNI") {
      info.operation.selectionSet.selections[0].selectionSet.selections.forEach(
        sel => {
          if (sel.name.value === "id") throw new Error("Unauthorized action");
        }
      );
    }

    let where = token.role === "ALUMNI" ? { role: "ALUMNI" } : null;
    if(args.year) where = {AND:[{ role: "ALUMNI" },{year:args.year}]}
    if(args.college_email) where = {AND:[{ role: "ALUMNI" },{college_email:args.college_email}]}
    if(args.name) where = {AND:[{ role: "ALUMNI"}, {OR:[{
      name_contains:args.name.toUpperCase()
    },{
      name_contains:args.name.toLowerCase()
    },{
      name_contains:args.name
    }
  ]}]}
    let users = await prisma.query.users({ where });
    users = users.map(user=>{
      user.profile_pic = getBase64(user.profile_pic)
      return user
    })
    
    return users;
  },
  async posts(parent, args, { prisma, request }, info) {
    const token = getToken(request);
    if (!token || (token && token.role === "ALUMNI")) {
      info.operation.selectionSet.selections[0].selectionSet.selections.forEach(
        sel => {
          if (sel.name.value === "id") throw new Error("Unauthorized action");
        }
      );
    }
    let posts = await prisma.query.posts(null, info);

    return posts;
  },

  async events(parent, args, { prisma, request }, info) {
    const token = getToken(request);
    if (!token || (token && token.role === "ALUMNI")) {
      info.operation.selectionSet.selections[0].selectionSet.selections.forEach(
        sel => {
          if (sel.name.value === "id") throw new Error("Unauthorized action");
        }
      );
    }
    let events = await prisma.query.events(null, info);

    return events;
  }

};

export { Query as default };
