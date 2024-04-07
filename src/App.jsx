import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";
import DarkMode from "./components/DarkMode/DarkMode";

const Feedbacks = lazy(() => import("./pages/FeedBacks"));
const Feedback = lazy(() => import("./pages/FeedBack"));
const NewFeedback = lazy(() => import("./pages/NewFeedback"));
const EditFeedback = lazy(() => import("./pages/EditFeedBack"));
const Roadmap = lazy(() => import("./pages/RoadMap"));
// Loader
import LoaderDark from "./components/UI/Loader";

// const Game = lazy(() => import("./GameBoard/Game"));

function App() {
  return (
    <Router>
      <DarkMode />
      <Suspense fallback={<LoaderDark />}>
        <Routes>
          <Route path="/feedbacks" element={<Navigate to="/" />} />
          <Route path="/" element={<Feedbacks />} />
          <Route path="/feedbacks/:id" element={<Feedback />} />
          <Route path="/new-feedback" element={<NewFeedback />} />
          <Route path="/edit-feedback/:id" element={<EditFeedback />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="*" element={<p>Page Not Found</p>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
