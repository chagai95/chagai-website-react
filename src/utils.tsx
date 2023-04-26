
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

export async function ring() {
  const data = JSON.stringify({
    call_id: '12345',
    lifetime: 100,
    offer: {sdp: "", type: "offer"},
    version: 0,
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
  const path = `/_matrix/client/r0/rooms/${roomId}/send/m.call.invite`
  const url = `${matrixServer}${path}`

  const response = await fetch(url, options);
  const dataResponse = await response.json();

}

function openTelegram() {
  window.open("https://t.me/chagai", '_blank')?.focus();
}