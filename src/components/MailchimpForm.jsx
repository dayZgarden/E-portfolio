import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newletter";

export const MailchimpForm = () => {
  const postUrl = `${''}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        )}
        />
    </>
  )
}
