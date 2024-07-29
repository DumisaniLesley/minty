import { Percent } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CardProps {
  title: string;
  number: number;
  icon: string;
  iconn: string;
  text: string;
  Percent: string;
}

const SingleCard: React.FC<CardProps> = ({ title, number, icon, iconn, text, Percent }) => {
  return (
    <Card>
      <CardHeader>
        <div className='flex justify-between items-center'>
          <h3>{title}</h3>
          <span>{icon}</span>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle>{number}</CardTitle>
      </CardContent>
      <CardFooter>
      <div className='flex justify-start gap-2'>
        <div>{iconn}</div>
        <div>{Percent}</div>
        <p className='text-sm text-gray-400'>{text}</p>
      </div>
      </CardFooter>
    </Card>
  )
}

export default SingleCard