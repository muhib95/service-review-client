import React from 'react';

const ServiceReview = ({rev}) => {
    const {displayName,review,photoURL,dt}=rev;
    console.log(rev);
    return (
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src={photoURL? photoURL:'N/A'} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold">{displayName?displayName:'No name'}</h4>
				<span className="text-xs text-gray-400">{dt?dt:'no date time'}</span>
			</div>
		</div>
	
	</div>
	<div className="p-4 space-y-2 text-sm text-gray-400">
		<p>{review?review:'no review'}</p>
		
	</div>
</div>
    );
};

export default ServiceReview;