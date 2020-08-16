import { Dimensions } from "react-native";

export const windowWidth: Number = Dimensions.get("window").width;
export const windowHeight: Number = Dimensions.get("window").height;

const BASE_URL = "http://localhost:3000/api/v1";
export async function request({
  url,
  type,
  params,
  token,
}: {
  url: string;
  type: string;
  params?: object;
  token?: string;
}): Promise<RequestResType | undefined> {
  try {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: type,
      headers: token
        ? {
            "Content-Type": "application/json",
            "X-BLACKCAT-TOKEN": token,
          }
        : {
            "Content-Type": "application/json",
          },
      body: params ? JSON.stringify(params) : undefined,
    });
    const formatRes = await res.json();
    if (formatRes.error) {
      alert(formatRes.error);
      return;
    }
    return {
      statusCode: 1,
      ...formatRes,
    };
  } catch (e) {
    alert("sorry,please try again");
  }
}
