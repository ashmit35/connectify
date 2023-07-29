import { Box } from "@mui/material";

const UserImage = ({ image, size}) => {

  return (
    <Box width={size ? size : "60px"} height={size ? size : "60px"}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size ? size : "60px"}
        height={size ? size : "60px"}
        alt="user"
        src={`http://localhost:3001/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
