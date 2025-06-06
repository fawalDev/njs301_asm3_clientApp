import Container from "../UI/Container";

interface InforProps {
    title: string,
    infor: string
}
function InforCol({ title, infor }: InforProps) {
    return (
        <div className="flex flex-col gap-2 items-center italic">
            <h4 className="uppercase text-xl">{title}</h4>
            <p className="text-zinc-600">{infor}</p>
        </div>
    )
}

export default function AdditionalInformation() {
    return (
        <Container className="grid md:grid-cols-3 gap-8 items-center bg-zinc-100 py-14 md:px-44 md:py-10">
            <InforCol title="Free Shipping" infor="Free shipping worlwide" />
            <InforCol title="24 x 7 Service" infor="Free shipping worlwide" />
            <InforCol title="Festival Offer" infor="Free shipping worlwide" />
        </Container>
    );
}
