import DataAPIService from "@services/core/data-api-service";

namespace UserModel {
  const COLLECTION_NAME = `${process.env.PROJECT_NAME}-users`;

  export const createOrGetUser = async (email: string) => {
    const dbUser = await findByEmail(email);

    if (dbUser) return dbUser;

    const user: IUser = {
      email,
    };

    const insertedId = await DataAPIService.insertOne<IUser>(
      COLLECTION_NAME,
      user
    );

    const createdUser = await findById(insertedId);

    return createdUser;
  };

  export const findByEmail = async (email: string) => {
    const user = await DataAPIService.findOne<IUser>(COLLECTION_NAME, {
      email,
    });

    return user;
  };

  export const findById = async (uid: string) => {
    const user = await DataAPIService.findOne<IUser>(COLLECTION_NAME, uid);

    return user;
  };
}

export default UserModel;
