import avatar from 'assets/img/avatar.svg'
import { Card } from 'components/card'
import Image from 'next/image'
export default function Main() {
  return (
    <Card>
      <Image src={avatar} alt="avatar" />
    </Card>
  )
}
