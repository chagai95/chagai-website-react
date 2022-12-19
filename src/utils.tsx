import * as https from 'https';

export async function sendMessage(message :string) {
  const data = JSON.stringify({
    msgtype: 'm.text',
    body: message
  });

  const accessToken = "syt_Ym90_OFgkYeyofWPyXCwQjCIj_3BUAoC"
  
  const options = {
    port: 8448,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: data
  };
  
  const matrixServer = "https://mx.chagai.website"
  const roomId = "!yxtimoKaUBDoOnQjts:chagai.website"
  const path = `/_matrix/client/r0/rooms/${roomId}/send/m.room.message`
  const url = `${matrixServer}${path}`

  const response = await fetch(url, options);
  const dataResponse = await response.json();

}