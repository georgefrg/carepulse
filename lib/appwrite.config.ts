import * as sdk from "node-appwrite";

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

// Log values for debugging

const client = new sdk.Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6702ba910032fe8957f2")
  .setKey(
    "standard_fe7f4c6eafa6909faf15393f58ba83287b2125a6c4f9ccf1f55393bfad3dd4f3587e38836d52f5d3a606bcbb03a77b38d5dec2fd964131a1a2be8297d578482367d627a29c2098e7e46ad682121ddd2ff60c89df49dc895982bf5c6a639685991a6644c15c7be4942cc86b67fe1eb096ec1e829b5b8565eda91041d559cb8984"
  );

// Export services
export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const users = new sdk.Users(client);
