using API.Dto;
using AutoMapper;
using Entity;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Category, CourseDto>();
            CreateMap<Course, CourseDto>()
            .ForMember(c => c.Category, o => o.MapFrom(s => s.Category.Name));
            CreateMap<Learning, LearningDto>();
            CreateMap<Requirement, RequirementDto>();
            CreateMap<Basket, BasketDto>();
            CreateMap<BasketItem, BasketItemDto>()
            .ForMember(b => b.CourseId, o => o.MapFrom(c => c.Course.Id))
            .ForMember(b => b.Title, o => o.MapFrom(c => c.Course.Title))
            .ForMember(b => b.Price, o => o.MapFrom(c => c.Course.Price))
            .ForMember(b => b.Image, o => o.MapFrom(c => c.Course.Image))
            .ForMember(b => b.Instructor, o => o.MapFrom(c => c.Course.Instructor));
        }
    }
}