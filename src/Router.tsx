import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import TimeLine from './pages/TimeLine';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timeline" element={<TimeLine />} />
    </Routes>
  );
}