import Checkbox from "../Checkbox/Checkbox";

const SidebarFilter = () => {

    return (
        <div className="bg-white w-1/4 rounded-xl px-6 py-8">
            <div className="mb-10">
                <h1 className="text-2xl font-bold mb-5">Filter</h1>
                <Checkbox title={'Paling Baru'} id={'baru'} value = {'Paling Baru'} />
                <Checkbox title={'Paling Populer'} id={'populer'} value = {'Paling Populer'} />
                <Checkbox title={'Promo'} id={'promo'} value = {'Promo'} />
            </div>
            <div className="mb-10">
                <h1 className="text-2xl font-bold mb-5">Kategori</h1>
                <Checkbox title={'UI/UX Design'} id={'uiux'} value = {'UI/UX Design'} />
                <Checkbox title={'Product Management'} id={'pm'} value = {'Product Management'} />
                <Checkbox title={'Web Development'} id={'webdev'} value = {'Web Development'} />
                <Checkbox title={'Android Development'} id={'android'} value = {'Android Development'} />
                <Checkbox title={'iOS Development'} id={'ios'} value = {'iOS Development'} />

                <Checkbox title={'Data Science'} id={'datasc'} value = {'Data Science'} />
            </div>
            <div className="mb-10">
                <h1 className="text-2xl font-bold mb-5">Level Kesulitan</h1>
                <Checkbox title={'Semua Level'} id={'semua'} value = {'Semua Level'} />
                <Checkbox title={'Beginner Level'} id={'beginner'} value = {'Beginner'} />
                <Checkbox title={'Intermediate Level'} id={'intermediate'} value = {'Intermediate'} />
                <Checkbox title={'Advanced Level'} id={'advanced'} value = {'Advanced'} />
            </div>
            <hr className="mb-3"/>
            <div className="flex justify-center">
                <button  id="deleteFilter" className="text-WARNING text-sm font-medium">Hapus Filter</button>
            </div>
        </div>
    );
};

export default SidebarFilter;
