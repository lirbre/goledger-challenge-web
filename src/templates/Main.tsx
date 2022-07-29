import { ReactNode } from 'react'

type Props = {
  meta: ReactNode
  children: ReactNode
}

const Main = (props: Props) => (
  <>
    {props.meta}
    <div className="container">{props.children}</div>
  </>
)

export { Main }
