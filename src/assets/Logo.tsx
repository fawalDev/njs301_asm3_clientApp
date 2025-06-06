
interface props {
    color?: string
}

export default function Logo({ color = '#333' }: props) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 160 30" fill={color} ><text font-family="&quot;Helvetica&quot;" font-size="28" font-weight="100" font-style="italic" transform="translate(-97.826712 24.483184)" stroke-width="0"><tspan id="untitled-s-tspan1" y="0">BOUTIQUE</tspan></text></svg>
}
