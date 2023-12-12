
import NextAuth from "next-auth/next";
import  GoogleProvider  from 'next-auth/providers/google';
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
    providers:[
        GitHubProvider({
            clientId: process.env.GITHUB_ID ??"",
            clientSecret: process.env.GITHUB_SECRET??""
          }),
        GoogleProvider({
            clientId:process.env.GOOGLE_ID ?? "",
            clientSecret:process.env.GOOGLE_SECRET ?? ""
        })
    ]
})

export {handler as GET, handler as POST};