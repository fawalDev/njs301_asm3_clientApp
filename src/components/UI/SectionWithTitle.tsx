
interface ISectionTileProps {
    h4: string
    h5: string
}
export default function SectionTitle(props: ISectionTileProps) {
    const { h4 = null, h5 = null } = props
    return (
        <div className="mb-10">
            <h5 className="text-zinc-500 text-sm">{h5}</h5>
            <h4 className="text-2xl">{h4}</h4>
        </div>
    )
}