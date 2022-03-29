import Seo from '../../components/Seo';
import {useRouter} from 'next/router';

export default function Detail({params}) {
  const router = useRouter();
  const [title, overview, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h2>{title}</h2>
      <h3>{overview}</h3>
    </div>
  );
}

export function getServerSideProps({params: {params}}) {
  return {
    props: {
      params,
    },
  };
}
