export function timeAgo(timestamp: string): string {
    const date: Date = new Date(timestamp);
    const now: Date = new Date();
    const diffTime: number = Math.abs(now.getTime() - date.getTime());
    const diffDays: number = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays}d ago`;
}

