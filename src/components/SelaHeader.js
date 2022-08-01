import { Segment, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SelaHeader = () => {
  return (
    <Segment basic vertical>
      <Link to="/">
        <Image centered src={"selaEx.png"} size={"small"} href="none" />
      </Link>
      <Link to="/">
        <Icon
          size="big"
          style={{
            float: "right",
            color: "#0F4C81",
            marginRight: "15px",
          }}
          name="user"
        ></Icon>
      </Link>
      <Icon
        size="big"
        style={{
          float: "left",
          color: "#0F4C81",
          marginLeft: "15px",
        }}
        name="bars"
      ></Icon>
    </Segment>
  );
};

export default SelaHeader;
