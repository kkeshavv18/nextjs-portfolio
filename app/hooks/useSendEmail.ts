import { useMutation, useQuery } from "@tanstack/react-query";

export interface EmailPayload {
  service_id: string;
  template_id: string;
  user_id: string;
  template_params: TemplateParams;
  accessToken: string;
}

export interface TemplateParams {
  user_name: string;
  email: string;
  message: string;
  subject: string;
}

const sendEmail = async (url: string, payload: EmailPayload): Promise<any> => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  const text = await response.text();
  if (text !== "OK") {
    throw new Error("Failed to send message");
  }

  return text;
};
export const useSendEmail = (url: string) => {
  return useMutation({
    mutationFn: (payload: EmailPayload) => sendEmail(url, payload),
  });
};
