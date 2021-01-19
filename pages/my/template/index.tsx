import { useRouter } from 'next/router';

export default function PageTemplate() {
  const router = useRouter();
  const {
    query: { page = 'Default' },
  } = router;

  console.log(router);

  return (
    <section>
      <h1>{page}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rem hic voluptates nesciunt
        accusamus, odit aspernatur. Deleniti voluptatibus officia error aspernatur vitae
        exercitationem voluptas, neque architecto quibusdam doloribus fugit expedita!
      </p>
      <h2>The second title of {page} page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quam praesentium sint
        nisi expedita, repellat quas non eaque quidem eligendi porro, magni vel dolores cumque cum
        ullam at reprehenderit harum.Sapiente, odio iusto ipsum esse distinctio modi accusantium
        consequuntur nesciunt ad id magni soluta, repellendus voluptates! Explicabo blanditiis
        perferendis assumenda delectus dolore, repellat vel dolores vitae est, rem ullam voluptatem?
      </p>
      <h2>The third title of {page} page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quam praesentium sint
        nisi expedita, repellat quas non eaque quidem eligendi porro, magni vel dolores cumque cum
        ullam at reprehenderit harum.Sapiente, odio iusto ipsum esse distinctio modi accusantium
        consequuntur nesciunt ad id magni soluta, repellendus voluptates! Explicabo blanditiis
        perferendis assumenda delectus dolore, repellat vel dolores vitae est, rem ullam voluptatem?
      </p>
    </section>
  );
}
