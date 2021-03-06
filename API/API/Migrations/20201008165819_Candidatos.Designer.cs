﻿// <auto-generated />
using API.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace API.Migrations
{
    [DbContext(typeof(BancoContext))]
    [Migration("20201008165819_Candidatos")]
    partial class Candidatos
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.2-servicing-10034")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("API.Models.Candidatos", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Nome");

                    b.Property<string>("Telefone");

                    b.Property<string>("UrlLinkedin");

                    b.Property<string>("UsuarioGithub");

                    b.HasKey("Id");

                    b.ToTable("Candidatos");
                });
#pragma warning restore 612, 618
        }
    }
}
