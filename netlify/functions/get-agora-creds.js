exports.handler = async function (event) {
  const { channel } = event.queryStringParameters;

  const appId = process.env.AGORA_APP_ID;
  let token;

  if (channel === "AVT102") {
    token = process.env.AVT102_TOKEN;
  } else if (channel === "AIRTL10 - DJI Mavic 3T") {
    token = process.env.MAVIC_TOKEN;
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid channel specified" }),
    };
  }

  if (!appId || !token) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Agora credentials not configured on server" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      appId: appId,
      token: token,
    }),
  };
}; 