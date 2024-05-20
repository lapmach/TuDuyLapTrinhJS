const students = [
    {
        id: 1,
        name: 'Chu Xuân Hiếu',
        description: 'Đi gội đầu lâu, hay ngủ gật',
        action: 'Xem xét',
        score: 6
    }, {
        id: 2,
        name: 'Nguyễn Thị Quỳnh',
        description: 'Nói chuyện nhiều',
        action: 'Xem xét',
        score: 7
    }, {
        id: 3,
        name: 'Trần Văn Hiệp',
        description: 'Thiếu tập trung, chưa tích cực khi học',
        action: 'Xem xét',
        score: 4
    }, {
        id: 4,
        name: 'Bui Huu Nghia',
        description: 'Thiếu tập trung, chưa tích cực khi học',
        action: 'Xem xét',
        score: 5
    }, {
        id: 5,
        name: 'Trương Hoàng Anh',
        description: 'Đi ra ngoài lâu',
        action: 'Xem xét',
        score: 5
    },
  ];

export default function Student(){
    return (
        <>
        {students.map((e, index) => (
        <p>{index},{e.name}, {e.score}, {e.action}</p>
        ))}
        </>
    )
}