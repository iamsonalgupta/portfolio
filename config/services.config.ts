export const tawkTo = {
  widgetId: "1ifv129ss",
  propertyId: "676c0c94af5bfec1dbe1bb25"
};

export const smtp = {
  host: "smtp-relay.sendinblue.com",
  port: 587,
  username: "827429001@smtp-brevo.com", // sonalgupta0330@gmail.com
  password: "XSfLPbZMJt8DrI36",

  fromEmail: "info@iamsonalgupta.com",
  fromName: "Sonal Gupta",
  bcc: [
    "gitwithravish@gmail.com",
    // "sonalgupta0330@gmail.com",
  ]
};

export const keyValueHtml = (key: string, value: any) => {
  return `<div><strong style="display: inline-block; min-width: 200px; text-align: left">${key}</strong><td>${value}</td></div>`
}