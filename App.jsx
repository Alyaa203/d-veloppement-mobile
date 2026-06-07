import { useEffect, useState } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { subscribeToAuthState } from './services/authService';
import LoginPage from './pages/LoginPage';
import DeckBuilderPage from './pages/DeckBuilderPage';
import LobbyPage from './pages/LobbyPage';
import BattlePage from './pages/BattlePage';
import { CircularProgress, Box } from '@mui/material';

export default function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = subscribeToAuthState((firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          name: firebaseUser.displayName,
          email: firebaseUser.email,
          photoURL: firebaseUser.photoURL,
        });
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  if (user === undefined) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: '#0a0015',
        }}
      >
        <CircularProgress sx={{ color: '#FFD700' }} />
      </Box>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to="/deck" />}
        />
        <Route
          path="/deck"
          element={
            user ? <DeckBuilderPage user={user} /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/lobby"
          element={user ? <LobbyPage user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/battle/:gameId"
          element={user ? <BattlePage user={user} /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to={user ? '/deck' : '/login'} />} />
      </Routes>
    </BrowserRouter>
  );
}
