import type { Route } from "./+types/course";

const Course = ( { params }: Route.ComponentProps )  => {
  const { courseId } = params
  return ( 
    <>
      <h1>Course {courseId}</h1>
    </>
   );
}
 
export default Course;