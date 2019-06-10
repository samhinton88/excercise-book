const groupedPersonByProfession = input => (
  input
     .reduce((acc, { name: n, profession: p }) => ({ ...acc, [p]: [...acc[p], n] })
     , input.reduce((acc, {profession}) => ({ ...acc, [profession]:[] }), {}))
);

// Perhaps a little more readable:
const _groupedPersonByProfession = input => {
  const initState = input.reduce((acc, {profession: p}) => ({ ...acc, [p]:[] }), {});

  return input.reduce((acc, { name: n, profession: p }) => {
    return { ...acc, [p]: [...acc[p], n] }
  }, initState)
}

const staff = [
  { name: 'Sam', profession: 'Doctor'},
  { name: 'Alice', profession: 'Teacher'},
  { name: 'Chris', profession: 'Teacher'}
]




console.log(_groupedPersonByProfession(staff))