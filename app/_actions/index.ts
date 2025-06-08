// import { BASE_URL } from "../_config";

// export class APIClient {
//   private readonly baseURL: string;

//   constructor() {
//     this.baseURL = BASE_URL || "";
//   }

//   private async makeRequest<T>(
//     endpoint: string,
//     method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE",
//     data?: Record<string, any> | FormData,
//     tags: string[] = [],
//     customHeaders: HeadersInit = {}
//   ): Promise<T> {
//     const parsedBaseURL = this.baseURL.replace(/\/+$/, "");
//     const parsedEndPoint = endpoint.replace(/^\/+/, "");

//     const url = `${parsedBaseURL}/${parsedEndPoint}`.trim();
//     const isFormData = data instanceof FormData;

//     const options: RequestInit = {
//       method,
//       headers: {
//         "Content-Type": isFormData ? "multipart/form-data" : "application/json",
//         ...customHeaders,
//       },
//     };

//     if (data) {
//       options.body = isFormData ? data : JSON.stringify(data);
//     }

//     if (tags) {
//       options.next = { tags, revalidate: 1800 };
//     }

//     const response = await fetch(url, options);
//     const jsonResponse = await response.json();

//     if (!response.ok) {
//       let error_message: string | number = response.status;
//       if (jsonResponse && jsonResponse.message) {
//         error_message = jsonResponse.message;
//       }
//       throw new Error(`${error_message}`);
//     }

//     return jsonResponse as Promise<T>;
//   }

//   async get<T>(
//     endpoint: string,
//     tags?: string[],
//     customHeaders?: HeadersInit
//   ): Promise<T> {
//     return this.makeRequest<T>(endpoint, "GET", undefined, tags, customHeaders);
//   }

//   async post<T>(
//     endpoint: string,
//     data: Record<string, any> | FormData,
//     customHeaders?: HeadersInit
//   ): Promise<T> {
//     return this.makeRequest<T>(endpoint, "POST", data, [], customHeaders);
//   }

//   async patch<T>(
//     endpoint: string,
//     data: Record<string, any>,
//     customHeaders?: HeadersInit
//   ): Promise<T> {
//     return this.makeRequest<T>(endpoint, "PATCH", data, [], customHeaders);
//   }

//   async put<T>(
//     endpoint: string,
//     data: Record<string, any>,
//     customHeaders?: HeadersInit
//   ): Promise<T> {
//     return this.makeRequest<T>(endpoint, "PUT", data, [], customHeaders);
//   }

//   async delete<T>(endpoint: string, customHeaders?: HeadersInit): Promise<T> {
//     return this.makeRequest<T>(
//       endpoint,
//       "DELETE",
//       undefined,
//       [],
//       customHeaders
//     );
//   }
// }

// const client = new APIClient();

// export default client;
