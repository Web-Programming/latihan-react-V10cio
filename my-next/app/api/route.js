export const dynamic = 'force-dynamic'
export async function POST(){
    let data = [
        {
            'npm' : '02327250049',
            'nama' : 'Valencio'
        },
        {
            'npm' : '2327250059',
            'nama' : 'Felix'
        },
    ];

    return Response.json(data);

}