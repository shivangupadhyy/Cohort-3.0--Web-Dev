// console.log("hello")
import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", function (socket) {
    console.log("user Connected");
    // socket.send("hello");
    // setInterval(()=>{
    //    socket.send("Current price of Solana is "  +  Math.random());
    // },500)
    // socket.on("message", (e)=>{
    //     console.log(e.toString());
    // })
    socket.on("message", (e) => {
        console.log(e.toString());
        console.log(e.toString() === 'ping');
        if (e.toString() === "ping") {
            socket.send("pong");
        }
    });
});
//# sourceMappingURL=index.js.map