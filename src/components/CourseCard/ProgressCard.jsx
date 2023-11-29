import { Icon } from '@iconify/react';

// eslint-disable-next-line react/prop-types
const ProgressCard = ({picture, course, rating, topic, author, level, module, time, width, complete}) => {
    const progress = {
        width: width || 'auto',
      };

    return (
        <button className="bg-white w-[323px] h-full rounded-2xl" style={{boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.08)'}}>
            <img src={picture} className="w-full h-full object-cover" style={{width: '323px', height: '80px', borderRadius: '20px 20px 0px 0px'}} alt="" />
            <div className="px-3 py-3">
                <div className="flex justify-between">
                    <p className="text-xs font-semibold text-DARKBLUE05">{course}</p>
                    <div className="flex gap-1">
                    <Icon icon="bi:star-fill" className="text-ATTENTION text-sm"/>
                        <p className="text-xs font-semibold">{rating}</p>
                    </div>
                </div>
                <p className="text-sm font-semibold mt-1 text-left">{topic}</p>
                <p className="text-xs mt-1 text-left">by {author}</p>
                <div className="flex justify-between mt-1">
                    <div className="flex gap-1 items-center">
                        <Icon icon="mdi:badge-outline" className="mt-1 text-SUCCESS text-lg" />
                        <p className="text-xs text-DARKBLUE05 font-medium mt-1">{level}</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Icon icon="clarity:book-line" className="mt-1 text-SUCCESS text-lg" />
                        <p className="text-xs font-medium mt-1">{module}</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Icon icon="ri:time-fill" className="mt-1 text-SUCCESS text-lg" />
                        <p className="text-xs font-medium mt-1">{time}</p>
                    </div>
                </div>
                <div className='mt-1 flex gap-1'>
                    <Icon icon="mdi:progress-check" className="mt-1 text-SUCCESS text-lg" />
                    <div className='w-48 bg-DARKGREY rounded-full mt-1 relative'>
                        <div
                        className='w-28 bg-DARKBLUE05 rounded-full absolute'
                        style={{ ...progress, height: "100%" }}
                        ></div>
                        <p className='text-xs text-white text-left px-1 mt-0.5 relative'>
                        {complete}
                        </p>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default ProgressCard