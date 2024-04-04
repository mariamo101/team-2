import {lazy, Suspense} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

const Feedbacks = lazy(() => import("./pages/FeedBacks"));
const Feedback = lazy(() => import("./pages/FeedBack"));
const NewFeedback = lazy(() => import("./pages/NewFeedback"));
const EditFeedback = lazy(() => import("./pages/EditFeedBack"));
const Roadmap = lazy(() => import("./pages/RoadMap"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
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
