import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users/$username/$skillid')({
  component: RouteComponent,
})

function RouteComponent() {
  const {username,skillid}=Route.useParams();
  return <div className='text-2xl  island-kicker p-19  feature-card flex justify-center items-center relative top-15'>Hello "{username} Got skills in {skillid}"!</div>
}
