import { Button, Card, List, ListItem, Typography } from "@material-tailwind/react"


const todos = [
    {
        id: 1,
        text: 'hi'
    },
    {
        id: 2,
        text: 'hay'
    }

]

const HomePage = () => {
    return (
        <div>
            <h1 className="mb-[20px] font-bold text-white 4xl:text-5xl text-sm md:text-2xl ">Some text</h1>
            <Card className="w-96 mb-[10px]">
                <List>
                    {todos.map(todo => <ListItem className="text-black p-3 border-b-2 border-[#aca5a5]">{todo.text}</ListItem>)}
                </List>
            </Card>
            <Button className="w-96 p-[5px] border border-[#aca5a5]" variant="filled">Кнопка</Button>
        </div>
    )
}

export default HomePage