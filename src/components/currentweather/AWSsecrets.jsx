import AWS from "aws-sdk";
import Wetherapi from "./Wetherapi";

let region = "ap-south-1",
  secretName = "weather-API/dev/config",
  secret,
  decodedBinarySecret;
const AWSsecrets = (getit) => {
  var client = new AWS.SecretsManager({
    region: region,
  });
  client.getSecretValue({ SecretId: secretName }, function (err, data) {
    if (err) {
      if (err.code === "DecryptionFailureException") throw err;
      else if (err.code === "InternalServiceErrorException") throw err;
      else if (err.code === "InvalidParameterException") throw err;
      else if (err.code === "InvalidRequestException") throw err;
      else if (err.code === "ResourceNotFoundException") throw err;
    } else {
      if ("SecretString" in data) {
        secret = data.SecretString;
        getit(secret);
        console.log(secret);
      } else {
        let buff = new Buffer(data.SecretBinary, "base64");
        decodedBinarySecret = buff.toString("ascii");
        return decodedBinarySecret;
      }
    }
  });
  console.log(AWSsecrets);
  return (
    <div>
      <Wetherapi>item = {secret}</Wetherapi>
    </div>
  );
};
export default AWSsecrets;
