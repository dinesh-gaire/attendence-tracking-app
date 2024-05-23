import { Client, Account, Databases } from 'appwrite';

export const appwriteConfig = {
    endpoint: process.env.NEXT_PUBLIC_APPWRITE_URL,
    projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
    studentsCollectionId: process.env.NEXT_PUBLIC_APPWRITE_STUDENTS_COLLECTION_ID,
    gradesCollectionId: process.env.NEXT_PUBLIC_APPWRITE_GRADES_COLLECTION_ID,
}

export const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)

export const account = new Account(client);
const databases = new Databases(client);

export async function addStudent(form){
    try {
        const newStudent = await databases.createDocument(
          appwriteConfig.databaseId,
          appwriteConfig.studentsCollectionId,
          ID.unique(),
          {
            name: form.name,
            grade: form.grade,
            address: form.address,
            contact: form.contact
          }
        );
    
        return newStudent;
      } catch (error) {
        throw new Error(error);
      }
}
