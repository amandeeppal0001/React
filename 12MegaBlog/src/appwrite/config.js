import conf from "../conf/conf.js";

import { Query, ID, Storage, Client, Databases } from "appwrite";

// we will also use redux here in which store has the knowledge of user is logged in or not(logged out)
export class Service{
        client  = new Client();
         databases;
         bucket;


         constructor(){
            this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId)
                 this.databases = new Databases(this.client);
                this.bucket = new Storage(this.client);
         }

        //  async createPost({title,slug,content,featuredImage,status , userId }){
        //     try {
        //         return await this.databases.createDocument(
        //             conf.appwriteDatabaseId,
        //             conf.appwriteCollectionId,
        //             slug,
        //             {
        //                 title,
        //                 content,
        //                 featuredImage,
        //                 status,
        //                 userId
        //             }
        //         )
        //     } catch (error) {
        //         console.log("appwrite service :: createPost :: error", error);
                
        //     }
        //  }

        // in appwrite/config.js

async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            ID.unique(), // ✅ Use Appwrite's unique ID generator
            {
                // Add the slug to the data object instead
                title,
                // slug,
                content,
                featuredImage,
                status,
                userId,
            }
        );
    } catch (error) {
        console.log("appwrite service :: createPost :: error", error);
        throw error;
    }
}

         async updatePost(slug, {title, content, featuredImage,status}){
            try{
                return await this.databases.updateDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
            {
                    title,
                    content,
                    featuredImage,
                    status,
            }
                )
            
        }
        catch(error){
            console.log("appwrite service :: updatePost :: error", error);

        }
         }

         async deletePost(slug){
            try {
                 await this.databases.deleteDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug
                )
                return true
            } catch (error) {
                console.log("appwrite service :: deletePost :: error", error);
                return false
            }
         }

         async getPost(slug){
            try {
                return await this.databases.getDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug
                )
            } catch (error) {
               console.log("appwrite service :: createPost :: error", error);
                return false
            }
         }

         async getPosts(queries =[ Query.equal("status","active")]){
            try {
                return await this.databases.listDocuments(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    queries, // OR [ Query.equal("status","active")]
                    // 100,  PAGINATION
                    
                )
            } catch (error) {
                
               console.log("appwrite service :: getPost :: error", error);
                return false
            }
         }


         //File services
         async uploadFile(file){
            try {
                return await this.bucket.createFile(
                    conf.appwriteBucketId,
                    ID.unique(),
                    file
                )
            } catch (error) {
               console.log("appwrite service :: uploadPost :: error", error);
                return false
            }
         }

         async deleteFile(fileId){
            try {
                 await this.bucket.deleteFile(
                    conf.appwriteBucketId,
                    fileId
                )
                return true
            } catch (error) {
               console.log("appwrite service :: createPost :: error", error);
                return false
            }
         }

         getFilePreview(fileId){  // this is very fast that's why we haven't used here async-await but if you want than you can use them here  // low quality image such that compresed version
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
         }
}



const service = new Service();

export default service
