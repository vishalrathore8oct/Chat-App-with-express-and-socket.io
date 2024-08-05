$(".submit-btn").click(async function(){
    const userData = {
      name: $("#name").val(), 
      roomId: $("#room-id").val()
    }

    if (userData.name === "" || userData.roomId === "") {
      alert("Please fill the Both Name and RoomId Box.")
    } else {
      console.log(userData);
    }
  });