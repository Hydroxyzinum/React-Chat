import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="
74e1305d-ece9-4b82-97ad-0a47298e2b40"
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
      ></PrettyChatWindow>
    </div>
  );
};

export default ChatsPage;
