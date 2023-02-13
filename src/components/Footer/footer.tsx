import {
  BottomNavigation,
  Box,
  Container,
  CssBaseline,
  Typography,
} from '@mui/material';
import { MdCopyright } from 'react-icons/md';

import './footer.css';

export default function StickyFooter() {
  return (
    <footer className="footer-distributed">
      <p>Currency converter &copy; 2023</p>
    </footer>
  );
}
