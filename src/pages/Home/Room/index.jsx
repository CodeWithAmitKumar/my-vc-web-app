import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React from "react";
import { useParams } from "react-router-dom";



const RoomPage = () => {
    const { roomId} = useParams(); 

    const myMeeting = async (element) => {
        const appID = 1682289359;
        const serverSecret = "301db92384f4fb767f50d8907a0c2858";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Amit Kumar Patra");
        const zc  = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                        name: 'Copy Link',
                        url: `http://localhost:3000/room/${roomId}`,
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: true ,
        });
    };
    return <div>
        <div ref={myMeeting} />
    </div>;
};
export default RoomPage;
