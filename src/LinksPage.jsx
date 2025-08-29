import { useRef } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';
import Avatar from '@mui/material/Avatar';

// ✅ Import your photo
import photo from '../src/assets/photo.jpg';
import bgImage from '../src/assets/background.jpg'; // background image

export default function LinksPage() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        backgroundImage: `url(${bgImage})`,   // ✅ background image
        backgroundSize: "cover",              // cover full screen
        backgroundPosition: "center",         // center the image
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Page Title */}
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "2rem",
        }}
      >
        Platforms Links 👇🏻
      </h1>

      {/* Avatar */}
      <Stack direction="row" spacing={2} sx={{ marginBottom: 3 }}>
        <Avatar
          alt="Profile"
          src={photo}
          sx={{ width: 56, height: 56 }}
        />
      </Stack>

      {/* Links */}
      <Stack spacing={4} direction="row">
        <Button
          variant="contained"
          color="success"
          href="https://www.geeksforgeeks.org/user/user_ghyteptwcd6/"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<CodeIcon />}
        >
          GeeksforGeeks
        </Button>
        <Button
          variant="contained"
          color="primary"
          href="https://leetcode.com/u/Pavithran-S/"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<CodeIcon />}
        >
          LeetCode
        </Button>
      </Stack>
    </div>
  );
}
