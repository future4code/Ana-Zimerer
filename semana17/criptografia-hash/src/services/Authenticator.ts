import * as jwt from "jsonwebtoken";

enum USER_ROLES{
  NORMAL="NORMAL",
  ADMIN="ADMIN"
}

interface AuthenticationData {
  id: string,
  role: USER_ROLES
}

export class Authenticator {
  private static EXPIRES_IN = "1min";
  public generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: Authenticator.EXPIRES_IN,
      }
    );
    return token;
  }

  public getData(token: string): AuthenticationData {
    const tokenData= jwt.verify(token, process.env.JWT_KEY as string) as any;
  
    return tokenData as AuthenticationData;
  }
}


