import Sidebar from "./components/Sidebar"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Contact from "./sections/Contact"
import Project from "./sections/Project"

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className='flex h-[100vh] w-full overflow-hidden bg-fondo'>
        <aside className='w-2/5 p-30'>
          <Sidebar />
        </aside>
        <div className='w-3/5 overflow-y-scroll space-y-32 scroll-smooth p-30'>
          <section id="about"><About /></section>
          <section id="experience"><Experience /></section>
          <section id="project"><Project /></section>
          <section id="contact"><Contact /></section>
        </div>
      </div>
    </div>
  )
}

export default App
