/**
 * Wraps operational metrics (percentages, ms latency) in <strong> for visual emphasis.
 */
export function boldMetrics(text) {
    if (!text) return null;

    const parts = text.split(/(\d+%\+?|\d+ms)/g);

    return parts.map((part, i) =>
        /^\d+%\+?$|^\d+ms$/.test(part) ? (
            <strong key={i} className="text-foreground font-semibold">
                {part}
            </strong>
        ) : (
            part
        )
    );
}
