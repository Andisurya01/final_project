import Checkbox from "../Checkbox/Checkbox";

const SidebarFilter = () => {
    return (
        <div className="bg-white w-1/4 rounded-xl px-6 py-8">
            <div className="mb-10">
                <h1 className="text-2xl font-bold mb-5">Filter</h1>
                <Checkbox title={'Paling Baru'} id={'baru'} />
                <Checkbox title={'Paling Populer'} id={'populer'} />
                <Checkbox title={'Promo'} id={'promo'} />
            </div>
            <div className="mb-10">
                <h1 className="text-2xl font-bold mb-5">Kategori</h1>
                <Checkbox title={'UI/UX Design'} id={'uiux'} />
                <Checkbox title={'Web Development'} id={'webdev'} />
                <Checkbox title={'Android Development'} id={'android'} />
                <Checkbox title={'Data Science'} id={'datasc'} />
                <Checkbox title={'Business Intelligence'} id={'business'} />
            </div>
            <div className="mb-10">
                <h1 className="text-2xl font-bold mb-5">Level Kesulitan</h1>
                <Checkbox title={'Semua Level'} id={'semua'} />
                <Checkbox title={'Beginner Level'} id={'beginner'} />
                <Checkbox title={'Intermediate Level'} id={'intermediate'} />
                <Checkbox title={'Advanced Level'} id={'advanced'} />
            </div>
            <hr className="mb-3"/>
            <div className="flex justify-center">
                <button className="text-WARNING text-sm font-medium">Hapus Filter</button>
            </div>
        </div>
    );
};

export default SidebarFilter;
