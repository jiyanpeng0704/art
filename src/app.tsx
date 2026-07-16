import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import GalleryPage from "@/pages/GalleryPage/GalleryPage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<GalleryPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
