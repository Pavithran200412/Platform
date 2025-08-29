import { useEffect, useRef } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';
import Avatar from '@mui/material/Avatar';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';

// ✅ Import your photo directly
import photo from '../src/assets/photo.jpg'; // adjust the path if needed

export default function LinksPage() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = WAVES({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x1e90ff,   // wave color
        shininess: 50,    // shiny effect
        waveHeight: 20,   // wave height
        waveSpeed: 1.0,   // wave speed
      });
    }
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
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
        Useful Links
      </h1>

      {/* Avatars Row */}
      <Stack direction="row" spacing={2} sx={{ marginBottom: 3 }}>
        <Avatar
          alt="Profile"
          src={photo}   // ✅ Using imported photo
          sx={{ width: 56, height: 56 }}
        />
      </Stack>

      {/* Links container */}
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
